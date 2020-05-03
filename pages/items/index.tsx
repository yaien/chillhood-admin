import { FC, useState, useEffect } from "react";
import { useAPI } from "../../shared/hooks";
import {
  Container,
  Card,
  CardHeader,
  Button,
  CardBody,
  CardDeck,
} from "reactstrap";
import Dash from "../../shared/components/dash";
import Head from "../../shared/components/head";
import ItemCard from "../../shared/components/item-card";
import Link from "next/link";
import Loader from "../../shared/components/loader";

const Items: FC = () => {
  const api = useAPI();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.items.fetch().then(() => setLoading(false));
  }, []);

  return (
    <Dash>
      <Head title="Items" />
      <Container className="mt-3">
        <Card>
          <CardHeader className="d-flex justify-content-between">
            Items
            <Link href="/items/create">
              <Button size="sm" color="primary">
                Agregar
              </Button>
            </Link>
          </CardHeader>
          <CardBody>
            {loading && <Loader />}
            <CardDeck>
              {api.items.data.map((item) => (
                <ItemCard key={item.id} item={item}></ItemCard>
              ))}
            </CardDeck>
          </CardBody>
        </Card>
      </Container>
    </Dash>
  );
};

export default Items;
