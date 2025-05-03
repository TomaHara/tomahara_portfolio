import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Work } from '@/types';

export async function getWorks(): Promise<Work[]> {
  const worksRef = collection(db, 'works');
  const querySnapshot = await getDocs(worksRef);
  const works: Work[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (
      'title' in data &&
      'description' in data &&
      'imageUrls' in data &&
      'tags' in data &&
      'createdAt' in data &&
      'tools' in data
    ) {
      works.push({
        title: data.title,
        description: data.description,
        imageUrls: data.imageUrls,
        tags: data.tags,
        tools: data.tools,
        createdAt: data.createdAt,
        link: data.link ? data.link : undefined,
        githubUrl: data.githubUrl ? data.githubUrl : undefined,
        demoUrl: data.demoUrl ? data.demoUrl : undefined,
        figmaUrl: data.figmaUrl ? data.figmaUrl : undefined,
        presentationUrl: data.presentationUrl
          ? data.presentationUrl
          : undefined,
      } as Work);
    } else {
      console.warn(`Document ${doc.id} is missing required Work fields`);
    }
  });
  return works;
}
