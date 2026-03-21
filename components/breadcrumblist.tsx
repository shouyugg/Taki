'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

function toTitleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname(); // 例: /examinee/mypage
  const segments = pathname.split('/').filter(Boolean); // ['examinee', 'mypage']

  const breadcrumbItems = [
    { name: 'Top', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      return {
        name: decodeURIComponent(toTitleCase(segment)),
        href: index === segments.length - 1 ? undefined : href,//三項演算子 条件式?真のとき:偽の時　===はめっちゃ厳密に比較
      };
    }),
  ];
///mapとは:23-32 配列を展開している　そして処理したのち新しい配列を作る　例:[1,2,3].map(x=>x*2)→[2,4,6]
///arrow関数:リストの要素それぞれに計算ができる(簡潔に言うと)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
//8/9 ncodeこれを理解してから、作業→おおよそ理解完了
export default Breadcrumbs;

//12/20 ページオンリー