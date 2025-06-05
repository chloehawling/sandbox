export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  image: string;
  description: string;
}

export const dogs: Dog[] = [
  {
    id: "1",
    name: "Bella",
    breed: "Labrador Retriever",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80",
    description: "A playful, loving lab who loves fetch and belly rubs.",
  },
  {
    id: "2",
    name: "Max",
    breed: "German Shepherd",
    age: "4 years",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80",
    description: "Loyal, smart, and ready for adventure.",
  },
  {
    id: "3",
    name: "Luna",
    breed: "Golden Retriever",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1518715308788-30057527ade5?auto=format&fit=crop&w=600&q=80",
    description: "Gentle and friendly, perfect for families.",
  },
  {
    id: "4",
    name: "Charlie",
    breed: "Beagle",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Curious explorer, loves kids and treats.",
  },
  {
    id: "5",
    name: "Daisy",
    breed: "Bulldog",
    age: "5 years",
    image: "https://images.unsplash.com/photo-1518715308788-30057527ade5?auto=format&fit=crop&w=600&q=80",
    description: "Calm, affectionate, and loves naps.",
  },
  {
    id: "6",
    name: "Rocky",
    breed: "Border Collie",
    age: "6 months",
    image: "https://images.unsplash.com/photo-1556520930-085831faeda9?auto=format&fit=crop&w=600&q=80",
    description: "Energetic and highly trainable puppy.",
  },
];