export type Cue = {
    id: string,
    number: number,
    part?: number,
    time?: number,
    delay?: number,
    follow?: number,
    hang?: number,
    block?: string,
    description?: string,
    placement?: string,
    is_music?: boolean,
    page?: number,
    system?: number,
    measure?: number,
    scene_id?: string,
    notes?: string
}

export const CueData: Cue[] = [
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },

  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },

  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },

  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },

  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
  {
    id: "1",
    number: 1,
    part: 3,
    time: 12.45,
    delay: 5.7,
    follow: 2,
    hang: 1,
    block: "A",
    description: "Introduction",
    placement: "center",
    is_music: true,
    page: 1,
    system: 2,
    scene_id: "House Open",
    measure: 4,
    notes: "This is a note",
  },
  {
    id: "2",
    number: 2,
    part: 2,
    time: 10.2,
    delay: 3.1,
    follow: 3,
    block: "B",
    description: "Verse 1",
    placement: "left",
    is_music: true,
    page: 1,
    system: 2,
    measure: 8,
  },
  {
    id: "3",
    number: 3,
    part: 1,
    time: 5.8,
    delay: 2.2,
    follow: 4,
    block: "C",
    description: "Chorus",
    placement: "right",
    is_music: true,
    page: 1,
    system: 3,
    measure: 12,
  },
  {
    id: "4",
    number: 4,
    part: 4,
    time: 18.3,
    delay: 7.0,
    follow: 5,
    block: "A",
    description: "Bridge",
    placement: "center",
    is_music: true,
    page: 2,
    system: 4,
    measure: 16,
  },
  {
    id: "5",
    number: 5,
    part: 2,
    time: 9.7,
    delay: 4.5,
    follow: 1,
    block: "B",
    description: "Verse 2",
    placement: "left",
    is_music: true,
    page: 2,
    system: 4,
    measure: 20,
  },
]

