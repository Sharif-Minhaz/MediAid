import { forwardRef } from "react";

const ImageDropZone = forwardRef(({ ...props }, ref) => {
	return <input type="file" ref={ref} {...props} />;
});

export default ImageDropZone;
