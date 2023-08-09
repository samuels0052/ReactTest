function Button() {
    const showAlert = () => {
        alert('Hello');
      };

    return <button class="btn btn-dark" onClick={showAlert}>Click</button>
}

export default Button;