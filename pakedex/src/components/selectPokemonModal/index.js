import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';

import { Container, Column } from './styles';

function SelectPokemonModal() {

    const [open, setOpen] = React.useState(false);

    function handleClose(){
        setOpen(!open);
    }

    function handleOpen(){
        setOpen(!open);
    }

    const body = (
        <Container>
            <Column>
                <p>Teste</p>
            </Column>
            <Column>
                <p>Teste</p>
            </Column>
        </Container>
      );

  return (
    <div style={{ marginLeft:60,display:'flex',justifyContent:"center", alignItems:'center'}}>
        <button type="button" onClick={handleOpen}>
        Open Modal
        </button>
        <Dialog 
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
            maxWidth="xs"
        >
                
        {body}
        </Dialog>
    </div>
    );
}

export default SelectPokemonModal;