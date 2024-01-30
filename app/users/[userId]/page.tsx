interface UserIdProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: UserIdProps) => {
  return (
    <div>
      <h1>User page</h1>
      <p>User ID: {params.userId}</p>
    </div>
  );
};

export default Page;
