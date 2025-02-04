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
        productId: "CAA0.28US10703000R5017", //replace for the product id
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
      <h2 className="text-2xl font-semibold font-antonio mb-8">
        Comentarios de este <span className="text-red-500">producto</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario para agregar comentarios */}
        <div>
          <h3 className="text-lg font-medium font-open-sans mb-4">
            Agregar una <span className="text-red-500">reseña</span>
          </h3>
          <p className="text-sm font-open-sans text-gray-600 mb-4">
            Su dirección de correo electrónico no será publicada. Los campos obligatorios están marcados *
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="text-sm font-open-sans mb-2">Califica este producto</div>
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
                      className={`w-6 h-6  ${rating <= (hoveredRating || newComment.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-yellow-400'
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
              className="px-6 py-2 bg-white font-montserrat font-bold text-lacampana-red1 rounded-full hover:bg-red-600 transition-colors"
              style={{
                width: '155px',
                height: '42px',
                top: '2198px',
                left: '152px',
                padding: '9px 35px 9px 35px',
                gap: '10px',
                borderRadius: '25px 25px 0px 25px',
                border: '1px solid #F70025',

              }}
            >
              Comentar
            </button>
          </form>
        </div>

        {/* Lista de comentarios */}
      
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex gap-4 bg-white rounded-lg"
              style={{
                width: '566px',
                height: '186px',
                padding: '25px 0px 0px 0px',
                gap: '12px',
                borderRadius: '0px 0px 15px 0px',
                boxShadow: '0px 4px 10px 0px #00000040', 
              }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-sm ml-6">{comment.name}</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= comment.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-yellow-400'
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="text-gray-500  ml-6 mb-2"
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '25.5px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                  }}
                >
                  {new Date(comment.date).toLocaleDateString('es-ES')}
                </div>
                <p
                  className="text-gray-700 ml-6"
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '25.5px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                  }}
                >
                  {comment.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
