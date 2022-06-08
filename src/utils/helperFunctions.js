export const trimAddress = (address) => {
  if (!address || address.length < 8) return '';
  let trimmed = address.replace('0x', '');
  return `${trimmed.slice(0, 4)}...${trimmed.slice(trimmed.length - 4)}`;
};
