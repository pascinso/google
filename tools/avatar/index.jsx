export function useAvatar({ className }) {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src="https://lh3.googleusercontent.com/ogw/ADGmqu98b5UNV1l8gDxcwiCh2hNxpdQ93-wRj5GufJoQKw=s32-c-mo"
      alt="profile"
    />
  );
}
