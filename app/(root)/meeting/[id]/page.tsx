import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      posts:<p>#{params.id}</p>
    </main>
  );
};

export default Meeting;
