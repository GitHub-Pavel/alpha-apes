import classNames from "classnames";

export default function InfiniteComponent({
  children,
  className,
  tagName = "div",
  count = 3,
  duration = "9000ms",
  reverse
}) {
  const CustomTag = tagName;
  const blockClasses = classNames(className, 'infinite-component');
  const boxClasses = classNames('infinite-component__box');
  const itemClasses = classNames('infinite-component__item');
  const offsetTranslte = 100/count;
  const initialXPosition = reverse ? 0 : offsetTranslte*(-1);
  const translateXPercent = reverse ? offsetTranslte*(-1) : 0;

  return (
    <>
      <CustomTag className={blockClasses}>
        <div className={boxClasses}>
          {[...Array(count).keys()].map((e,i) => <div key={i} className={itemClasses}>{children}</div>)}
        </div>
      </CustomTag>
      <style jsx>{`
        @keyframes loopInfiniteComponent {
          from {
            transform: translateX(${initialXPosition}%);
          }
          to {
            transform: translateX(${translateXPercent}%);
          }
        }

        .infinite-component {
          overflow: hidden;
        }

        .infinite-component__box {
          display: inline-flex;
          transform: translateX(${initialXPosition}%);
          animation: loopInfiniteComponent ${duration} linear infinite;
        }

        .infinite-component__item {
          display: inline-block;
        }
      `}</style>
    </>
  );
}