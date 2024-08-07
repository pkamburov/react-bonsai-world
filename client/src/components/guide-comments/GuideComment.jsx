import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function GuideComment({ comment }) {
  const postedOn = new Date(comment._createdOn);
  const formattedDate = postedOn.toLocaleDateString();

  return (
    <Card className="mt-6 w-[100%] mb-4">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-1 font-hero">
          {comment.username}
        </Typography>
        <Typography color="blue-gray" className="mb-2 font-body text-[14px]">
          Posted on {formattedDate}
        </Typography>
        <Typography className="font-body text-light-gray font-medium">
          {comment.comment}
        </Typography>
      </CardBody>
    </Card>
  );
}