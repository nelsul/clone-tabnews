function status(request, response) {
  response.status(200).json({
    status: "Working fine!",
  });
}

export default status;
