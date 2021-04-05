
import './App.css';

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const finalSpaceCharacters = [
  {
    id: 'Gordon',
    name: 'Gordon Ryan',
    thumb: 'https://preview.redd.it/my7mfsrvirn31.jpg?width=750&format=pjpg&auto=webp&s=c78c523367cdaa2467571cdfdec7efcc11542d16'
  },
  {
    id: 'Garry',
    name: 'Garry Tonon',
    thumb: 'https://cdn.vox-cdn.com/thumbor/uHfUsEkxw4Vj4i39vupQEOUaT98=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16284174/YK4_3191.jpg'
  },
  {
    id: 'Khabib',
    name: 'Khabib Nurmagomedov',
    thumb: 'https://i.guim.co.uk/img/media/406a60a7c8ce566c0c3da8981fe121fee991c7a7/0_115_4665_2800/master/4665.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=512c424707e8d2a1d7921f291b35c56a'
  },
  {
    id: 'Aung Lang',
    name: 'Aung Lang Sang',
    thumb: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/07/03/bd175de2-bcd3-11ea-b64b-070a892763db_image_hires_125306.jpg?itok=NfnDcSaN&v=1593751991'
  },
  {
    id: 'Johnathan',
    name: 'Johnathan Haggerty',
    thumb: 'https://media.gettyimages.com/photos/jonathan-haggerty-of-england-fights-against-sama-gaiyanghadao-of-picture-id1146768715'
  },
  {
    id: 'Canelo',
    name: 'Canelo Alvarez',
    thumb: 'https://www.informador.mx/__export/1564857424594/sites/elinformador/img/2019/08/03/rs3199028_age-2019-05-06-20-44-098_afp_crop1564857423436.jpg_1034156727.jpg'
  },
]



function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);


  function handleOnDragEnd(result) {
    console.log(result);
    if(!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }
  return (
    <div className="App">
        <h1>Favorite fighters</h1>
      <header className="App-header">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef} >
                  {characters.map(({id, name, thumb}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                            <div className="characters-thumb">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>
                              {name}
                            </p>
                          </li>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )}             
            </Droppable>
           
          </DragDropContext>
      </header>

    </div>
  );
}

export default App;
