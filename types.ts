export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  numberOfParticipants: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
