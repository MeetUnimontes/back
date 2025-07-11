import { ObjectId } from "mongodb";

export interface Session {
  id: ObjectId;
  movieId: ObjectId;
  roomId: ObjectId;
  startsAt: Date;
  endsAt: Date; // Será calculado a partir de startsAt e durationMin
  durationMin: number;
  basePrice: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
