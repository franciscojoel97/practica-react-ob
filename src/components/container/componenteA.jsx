import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponenteB from '../pure/componenteB';

const ComponenteA = () => {

    const defaultContact = new Contact('Francisco', 'Cevallos', 'joelcevallos363@gmail.com', false);

    return (
        <div>
            <div>Contacto: </div>
            <ComponenteB contact={defaultContact}></ComponenteB>
        </div>
    )
}

export default ComponenteA
