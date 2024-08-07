import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar
} from "@material-tailwind/react";

export function GuideComment({ comment }) {
    const postedOn = new Date(comment._createdOn);
    const formattedDate = postedOn.toLocaleDateString('en-GB');

    return (
        <Card className="mt-6 w-[100%] mb-4">
            <CardHeader color="transparent" floated={false} shadow={false} className="mx-0 flex items-center gap-4 pt-0 px-2">
                <Avatar
                    size="lg"
                    variant="circular"
                    src="../src/assets/avatar.png"
                    alt="avatar"
                    className="mx-0 flex items-center gap-4 pt-0 mb-2"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-1 font-hero">
                            {comment.username}
                        </Typography>
                    </div>
                    <Typography color="blue-gray" className="mb-2 font-body text-[14px]">
                        Posted on {formattedDate}
                    </Typography>

                </div>
            </CardHeader>
            <CardBody>
                <Typography className="font-body text-light-gray font-medium">
                    {comment.comment}
                </Typography>
            </CardBody>
        </Card>
    );
}