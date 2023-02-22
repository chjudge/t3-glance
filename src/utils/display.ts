export const displayName = (name: string) => {
  const [last, rest] = name.split(',');
  if (last && rest) {
    const [first, middle] = rest.trim().split(' ');
    if (first && middle)
      return `${first} ${middle[0] ? `${middle[0]}.` : ''} ${last}`;
  }
  return name;
};
