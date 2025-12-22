import { api } from "./client";

export interface SharePhotoResponse {
  success: boolean;
  data: SharePhotoData;
}

export interface SharePhotoData {
  composedImageUrl: string;
  frameId: string;
  shareExpireAt: string;
  shareCode: string;
}

export async function getSharePhoto(code: string): Promise<SharePhotoResponse> {
  return api.get<SharePhotoResponse>(`/shares/photo/${code}`);
}
