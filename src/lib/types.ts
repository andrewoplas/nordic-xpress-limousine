export interface NextPageProps<SlugType = string> {
  params: { slug: SlugType; locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
