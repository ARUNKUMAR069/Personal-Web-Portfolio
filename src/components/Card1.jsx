import { Card, CardContent, CardDescription, CardTitle } from "keep-react";

export const Card1 = ({ description = "Description", title = "Title" }) => {
  return (
    <Card className="max-w-md">
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
