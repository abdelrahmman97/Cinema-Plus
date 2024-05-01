export interface SearchResult {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}

export interface Result {
	backdrop_path: null | string;
	id: number;
	original_name?: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	adult: boolean;
	name?: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	first_air_date?: Date;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
	original_title?: string;
	title?: string;
	release_date?: Date;
	video?: boolean;
}

export enum MediaType {
	Movie = "movie",
	Tv = "tv",
}
