function AuthorCard({ avatar, name, role }) {
  return (
    <aside className="flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="avatar">
        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={avatar} alt={`Avatar for: ${name}`} />
        </div>
      </div>
      <p className="text-lg font-bold pt-4">{name}</p>
      <p className="text-sm text-accent">{role}</p>
    </aside>
  );
}

export default AuthorCard;
