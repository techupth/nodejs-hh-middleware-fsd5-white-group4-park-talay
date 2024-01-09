const validateAssignmentData = (req, res, next) => {
    let { title, description, categories } = req.body;
    title = title ?? "";
    description = description ?? "";

    if (title.length > 35) {
        return res.json({
            message: "Title must not be over 35 characters",
        });
    }

    if (description.length > 150) {
        return res.json({
            message: "Description must not exceed 150 characters",
        });
    }

    if (categories !== undefined) {
        if (categories[0] === undefined) {
            return res.json({
                message: "Categories must be an array with at least 1 value",
            });
        }
    }

    next();
};

export default validateAssignmentData;
