export interface TrendingResponse {
	page: number;
	results: TrendingModel[];
	total_pages: number;
	total_results: number;
}

export interface TrendingModel {
	backdrop_path: string;
	id: number;
	original_title?: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	adult: boolean;
	title?: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date?: string;
	video?: boolean;
	vote_average: number;
	vote_count: number;
	original_name?: string;
	name?: string;
	first_air_date?: string;
	origin_country?: string[];
}

type MediaType = "movie" | "tv";
