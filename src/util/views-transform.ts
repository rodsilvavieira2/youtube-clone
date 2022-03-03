export function viewsTransform(currentViews: number) {
  if (currentViews >= 1000)
    return `${currentViews.toString().slice(0, 3)} mil visualizações`;

  if (currentViews >= 1000000)
    return `${currentViews.toString().slice(0, 2)} mi visualizações`;

  if (currentViews >= 1000000000)
    return `${currentViews.toString().slice(0, 2)} bi visualizações`;

  return `${currentViews} visualizações`;
}
