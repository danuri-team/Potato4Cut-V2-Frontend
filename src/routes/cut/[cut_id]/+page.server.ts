import { getSharePhoto } from "$lib/api/shares";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { cut_id } = params;

  try {
    const photo = await getSharePhoto(cut_id);
    return { photo };
  } catch (e) {
    console.error("Failed to load photo:", e);
    throw error(404, "사진을 찾을 수 없습니다");
  }
};
