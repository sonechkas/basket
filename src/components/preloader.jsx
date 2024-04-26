function Preloader() {
    return <div className="preload d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Загрузка...</span>
        </div>
    </div>
}

export { Preloader };