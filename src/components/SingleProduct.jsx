/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SingleProduct = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <img
            src={product.photoUrl}
            alt="product image"
            className="object-cover rounded-sm"
          />
        </div>
        <CardTitle>
          <p>
            {product.name.length > 20
              ? product.name.slice(0, 20) + "..."
              : product.name}
          </p>
        </CardTitle>
        <CardDescription className="text-lg font-semibold">{product.brand}</CardDescription>
        <CardDescription>{product.category}</CardDescription>
        <CardDescription className="text-md font-medium text-red-500">
          ${product.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-light">
          {product.description.length > 60
            ? product.description.slice(0, 60) + "..."
            : product.description}
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default SingleProduct;
