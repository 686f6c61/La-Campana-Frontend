import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useGetProductCommentsQuery, useAddProductCommentMutation } from '../../../store/reducers/apiSlice';

export default function Comments() {
  const { data: comments = [], error, isLoading, refetch } = useGetProductCommentsQuery();
  const [addProductComment] = useAddProductCommentMutation(); // Hook para enviar un comentario
  const [newComment, setNewComment] = useState({
    comment: '',
    name: '',
    email: '',
    rating: 0,
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newComment.comment && newComment.name && newComment.rating) {
      const newCommentObj = {
        name: newComment.name,
        date: new Date().toISOString(), // Fecha en formato ISO
        comment: newComment.comment,
        rating: newComment.rating,
        email: newComment.email, 
      };

      try {
        await addProductComment(newCommentObj).unwrap(); 
        refetch(); 
        setNewComment({ comment: '', name: '', email: '', rating: 0 }); 
      } catch (err) {
        console.error('Error al agregar el comentario:', err);
      }
    }
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-8">
        Comentarios de este <span className="text-red-500">producto</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario para agregar comentarios */}
        <div>
          <h3 className="text-lg font-medium mb-4">
            Agregar una <span className="text-red-500">reseña</span>
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Su dirección de correo electrónico no será publicada. Los campos obligatorios están marcados *
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="text-sm mb-2">Califica este producto</div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setNewComment({ ...newComment, rating })}
                    onMouseEnter={() => setHoveredRating(rating)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        rating <= (hoveredRating || newComment.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={newComment.comment}
              onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
              placeholder="Escribir opinión de este producto..."
              className="w-full p-3 border rounded-lg mb-4 min-h-[120px]"
              required
            />

            <input
              type="text"
              value={newComment.name}
              onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
              placeholder="Nombre *"
              className="w-full p-3 border rounded-lg mb-4"
              required
            />

            <input
              type="email"
              value={newComment.email}
              onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
              placeholder="Correo electrónico *"
              className="w-full p-3 border rounded-lg mb-4"
              required
            />

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="privacy-policy"
                className="rounded border-gray-300"
                required
              />
              <label htmlFor="privacy-policy" className="text-sm text-gray-600">
                He leído y acepto la política de tratamiento de datos personales
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              Comentar
            </button>
          </form>
        </div>

        {/* Lista de comentarios */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{comment.name}</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= comment.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-gray-500 text-sm mb-2">{new Date(comment.date).toLocaleDateString('es-ES')}</div>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
