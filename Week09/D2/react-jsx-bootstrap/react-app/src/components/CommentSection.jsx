const CommentSection = () => {
  const comments = [
    {
      comment: "Testo del commento",
      rate: "4",
    },
    {
      comment: "Testo del commento",
      rate: "7",
    },
    {
      comment: "Testo del commento",
      rate: "2",
    },
    {
      comment: "Testo del commento",
      rate: "6",
    },
    {
      comment: "Testo del commento",
      rate: "4",
    },
  ];
  return (
    <div>
      <h3>Commenti</h3>
      {comments.map((comm, index) => (
        <div key={index}>
          <small>
            ({comm.rate}) {comm.comment}
          </small>
        </div>
      ))}
    </div>
  );
};
export default CommentSection;
