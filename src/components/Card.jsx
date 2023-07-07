import {Wrapper} from './Wrapper';

export const Card = ({id, question, answer, selectedId, setSelectedId}) =>{
    const wrapperStyled = {
        backgroundColor: selectedId === id ? 'tomato' : '#fff',
        color: selectedId === id ? '#fff' : '#444',
        cursor: 'pointer'
    }
    return <Wrapper onClick={() => setSelectedId(id)} style={wrapperStyled}>
        <p>{selectedId === id ? answer : question}</p>
    </Wrapper>
}