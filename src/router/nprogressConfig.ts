import type { NProgressOptions } from "nprogress";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogressReset.css";

NProgress.configure({ showSpinner: false } as NProgressOptions);

export default NProgress;
