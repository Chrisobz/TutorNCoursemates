import Course from "../models/course.model.js";
import createError from "../utils/createError.js";

export const createCourse = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a course!"));

  const newCourse = new Course({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    next(err);
  }
};
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course.userId !== req.userId)
      return next(createError(403, "You can delete only your course!"));

    await Course.findByIdAndDelete(req.params.id);
    res.status(200).send("Course has been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) next(createError(404, "Course not found!"));
    res.status(200).send(course);
  } catch (err) {
    next(err);
  }
};
export const getCourses = async (req, res, next) => {
  const { min, max, sort } = req.query;

  const filters = {
    ...(req.query.userId && { userId: req.query.userId }),
    ...(req.query.cat && { cat: req.query.cat }),
    ...(req.query.search && {
      title: { $regex: req.query.search, $options: 'i' },
    }),
    ...(min || max
      ? {
          price: {
            ...(min && { $gte: min }),
            ...(max && { $lte: max }),
          },
        }
      : {}),
  };

  try {
    const courses = await Course.find(filters).sort({ [sort]: -1 });
    res.status(200).send(courses);
  } catch (err) {
    next(createError(500, err));
  }
};
