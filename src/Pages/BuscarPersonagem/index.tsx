import { useEffect, useState } from "react";
import { Button, Col, Container, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { Card } from "../../Components/Card";
import { api } from "../../service/Api";

export const BuscarPersonagem = () => {

  const [personagem, setPersonagem] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [status, setStatus] = useState('');
  const [genero, setGenero] = useState('');
  const [name, setName] = useState('');
  const [desabilitarVoltar, setDesabilitarVoltar] = useState(false);

  useEffect(() => {
    setDesabilitarVoltar(false)
    if(pagina == 1){
      setDesabilitarVoltar(true)
    }
    buscarPersonagens()
  },[pagina])

  useEffect(() => {
    setPagina(1)
    buscarPersonagens()
  },[status, genero, name])

  const buscarPersonagens = async () => {
    const {data} = await api.get(`character?status=${status}&gender=${genero}&page=${pagina}&name=${name}`);
    setPersonagem(data.results)
  }

  const avancar = () => {
    setPagina(pagina + 1)
    window.scrollTo(0, 0);
  }

  const voltar = () => {
    setPagina(pagina - 1)
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Container className="justify-content-center">
      <div className="p-4 d-flex ">
        <Col className="m-2">
          <FormLabel>Status</FormLabel>
          <FormSelect 
            name="status  "
            onChange={e => setStatus(e.target.value)}
            >
            <option value="">Selecione o status</option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </FormSelect>
        </Col>
        <Col className="m-2">
          <FormLabel>Gênero</FormLabel>
          <FormSelect
            onChange={e => setGenero(e.target.value)}
          >
            <option value="">Selecione o gênero</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="genderless">Sem gênero</option>
            <option value="unknown">Desconhecido</option>
          </FormSelect>
        </Col>
      </div>
        <FormControl 
          type="text" 
          placeholder="Digite o nome do personagem que deseje buscar"
          onChange={e => setName(e.target.value)}  
        />
    </Container>

    <Container className="d-flex">
      <Row className="p-4 justify-content-center">
        {personagem.map((values:ICard, index) => {
          return(
            <Card
            name={values.name}
            image={values.image}
            species={values.species}
            status={values.status}
            key={index}
            />
            )
          })}
      </Row>
    </Container>
    <Container className="p-4 d-flex justify-content-center">
      <Button className="m-4" onClick={voltar} disabled={desabilitarVoltar}>Voltar</Button>
      <Button className="m-4" onClick={avancar} >Avançar</Button>
    </Container>
    </>
  )
}