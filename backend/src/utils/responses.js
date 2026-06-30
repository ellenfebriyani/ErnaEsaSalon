Salinexport const successResponse = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (res, error, message = 'Error', statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: error?.message || error
  });
};

export const paginatedResponse = (res, data, total, page, limit, message = 'Success') => {
  res.status(200).json({
    success: true,
    message,
    data,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit)
    }
  });
};