import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    const dish= props.dishes.filter((dish) => dish.featured)[0]
    const promotion = props.promotions.filter((promotion) => promotion.featured)[0]
    const leader = props.leaders.filter((leader) => leader.featured)[0]

    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;