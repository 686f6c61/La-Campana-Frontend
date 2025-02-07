const ModalScreen = ({ id, button, children }) => {
  return (
    <article>
      {button}
      <dialog id={id} className="modal">
        <div className="modal-box w-full px-0 pt-16 max-w-full tablet:max-w-screen-desktop shadow-none">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost fixed right-2 top-2 text-white">✕</button>
          </form>
          <ul className="grid grid-cols-2 desktop:grid-cols-4 gap-4 tablet:m-4">
            {children}
          </ul>
        </div>
      </dialog>
    </article>
  )
}

export default ModalScreen