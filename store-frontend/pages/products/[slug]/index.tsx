import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import http from "../../http";
import { Product, products } from "../../model";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      <Head>
        <title>{product.name} - Detalhes do produto</title>
      </Head>
      <Card>
        <CardHeader
          title={product.name.toUpperCase()}
          subheader={`R$${product.price}`}
        />
        <CardActions>
          <Link
            href="/products/[slug]/order"
            as={`/products/${product.slug}/order`}
            passHref
          >
            <Button size="small" color="primary" component="a">
              Comprar
            </Button>
          </Link>
        </CardActions>
        <CardMedia image={product.image_url} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default ProductDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  try {
    const { data: products } = await http.get(`products/${slug}`);

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return { notFound: true };
    }
    throw 0;
  }
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { data: products } = await http.get(`products`);

  const paths = products.map((p: Product) => ({
    params: { slug: p.slug },
  }));

  return { paths, fallback: "blocking" };
};
