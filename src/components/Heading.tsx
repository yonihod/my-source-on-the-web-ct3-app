const Heading: React.FC<{icon: any, title: string}> = ({ icon, title }) => {
  const Icon = icon;
  return (
    <div className="heading flex items-center pb-8">
      <Icon size="0.875rem" className="mr-2" />
      <h6 className="font-bold uppercase text-sm leading-none">{title}</h6>
    </div>
  );
};

export default Heading;
