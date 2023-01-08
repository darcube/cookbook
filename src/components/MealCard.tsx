import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';

export interface MealProps {
    id: number,
    src: string
    name: string
    time: number
  }

const Meal = ({ id, src, name, time }: MealProps) => {
    return (
        <Card className="meal" key={id}>
            <Card.Img variant="top" src={src} className="meal__img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="meal__time">{time} MIN</div>
            </Card.Body>
        </Card>
        // <Figure>
        //     <Figure.Image
        //         width={200}
        //         height={200}
        //         alt="name"
        //         src={src}
        //     />
        // </Figure>
    )
}

export default Meal;