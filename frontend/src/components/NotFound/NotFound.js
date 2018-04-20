import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Opa!</h1>
                        <h2>404 Não encontrado</h2>

                        <div className="error-details">Desculpe, ocorreu um erro, a página solicitada não foi encontrada!</div>

                        <div className="error-actions">
                            <Link to={'/'} className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Página principal
                            </Link>
                            <Link to={'/'} className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-envelope"></span> 
                                Entre em contato com o suporte
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
