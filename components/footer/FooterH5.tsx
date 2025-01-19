type Props = {
  context: string;
};

const FooterH5 = ({ context }: Props) => {
  return <h5 className="text-2xl font-semibold text-lightDark">{context}</h5>;
};

export default FooterH5;
