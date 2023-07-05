    import {Button, Card, CardImg } from "react-bootstrap";

    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

    const SelectedItem = ({img, title, price, removeFromBasket}) => {

        const handleRemoveFrombasket = () => {

        }

        return (
            <>
                <Card className="d-flex flex-row justify-content-between my-2 w-100" style={{padding: "15px"}}>
                    <CardImg style={{width: "180px", height: "180px"}} src={img}/>
                    <div className="select-content d-flex flex-column">
                        <Button onClick={handleRemoveFrombasket} style={{width: "40px", height: "40px", alignSelf: "end"}} className="btn-danger">
                            <FontAwesomeIcon icon={faWindowClose}/>
                        </Button>

                        <Card.Title className="text-success fw-bold text-uppercase my-4 text-right">
                            {title}
                        </Card.Title>

                        <Card.Text style={{fontSize: "1.4rem"}} className="text-success fw-regular text-left">
                            {price}$
                        </Card.Text>

                    </div>
                </Card>
            </>
        )
    }

    export default SelectedItem;    