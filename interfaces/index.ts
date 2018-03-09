export interface Item {
  mediaId: number;
  title: string;
  description?: string;
  tags?: [string];
  type?: string;
  url?: string;
}

export interface Audio extends Item {

}

export interface Video extends Item {

}
