interface ServiceCardNewProps {
  title: string;
  icon: React.ReactNode;
  className: string;
  iconWrapperClass: string;
}

const ServiceCardNew: React.FC<ServiceCardNewProps> = ({
  title,
  icon,
  className,
  iconWrapperClass,
}) => {
  return (
    <div
      className={`border rounded w-full h-[96px] p-3.5 relative flex justify-center ${className}`}
    >
      <p className="text-base font-normal text-center text-black_dark whitespace-pre-line">
        {title}
      </p>
      <div
        className={`bg-white border rounded-full h-[56px] w-[56px] shadow-rounded_shadow absolute -bottom-1/2 -translate-y-1/3 flex items-center justify-center ${iconWrapperClass}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default ServiceCardNew;
