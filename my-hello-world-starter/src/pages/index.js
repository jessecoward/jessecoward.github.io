import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from 'WineCard';
import { useLocalStorage } from 'react-use';

const dummyPrice = 99
function PosPage() {
    let [wineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('red')
    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCart(wine) {
        cart.push(wine)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wine/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    items.push(
                        <WineCard
                            key={i}
                            image={wines[i].image}
                            title={wines[i].title}
                            description={wines[i].description}
                            price={dummyPrice}
                            handleClick={() => { addToCart(wines[i]) }}
                        />
                    )
                }
                setWineTitles(items)
            })
    }, [subMenu])

    return <Container>
        <h1>Wine POS</h1>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => { setSubMenu('red') }}>Red</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('white') }}>White</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {wineTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart</h2>
                {cart.map((item, i) => {
                    return <Row key={i}>
                        <Col>{item.title}</Col>
                        <Col>{dummyPrice}</Col>
                    </Row>
                })}
                <Row>
                    Total: {cart.length * dummyPrice} Baht
                </Row>
            </Col>
        </Row>
    </Container >
}
export default PosPage
