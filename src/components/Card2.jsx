import "../index.css";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import images from "../images/Html.png"
export const Card2 = ({
  description = "Description",
  title = "Title",
  image = {images},
  ...props
}) => {
  return (
    <>
      <Card>
        <CardHeader className="flex justify-center items-center p-5">
          <img
            src={image}
            className="rounded-t-xl   w-[100px] h-[100px]"
            alt="image"
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Button>Check Now</Button>
        </CardContent>
      </Card>
    </>
  );
};
