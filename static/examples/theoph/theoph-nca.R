# Bounded descriptive NCA; base R only
input_file <- "theoph-input.csv"
output_file <- "theoph-nca-summary.csv"
stopifnot(file.exists(input_file))
hash_before <- unname(tools::md5sum(input_file))
d <- read.csv(input_file, stringsAsFactors=FALSE, check.names=FALSE)
stopifnot(nrow(d)==132L, length(unique(d$Subject))==12L)
stopifnot(!anyNA(d[c("Subject","Time","conc")]))
stopifnot(!any(duplicated(d[c("Subject","Time")])))
ids <- sort(unique(d$Subject))
res <- do.call(rbind, lapply(ids, function(id) {
 z <- d[d$Subject==id,c("Time","conc")]; z <- z[order(z$Time),,drop=FALSE]
 stopifnot(nrow(z)==11L, min(z$Time)==0, all(diff(z$Time)>0))
 cm <- max(z$conc); tm <- min(z$Time[z$conc==cm]); dt <- diff(z$Time)
 seg <- dt*(z$conc[-nrow(z)]+z$conc[-1L])/2
 data.frame(subject=id,cmax_mg_L=cm,tmax_h=tm,auc0_last_mg_h_L=sum(seg),last_time_h=max(z$Time))
}))
row.names(res) <- NULL
write.csv(res, output_file, row.names=FALSE, quote=TRUE)
hash_after <- unname(tools::md5sum(input_file))
stopifnot(identical(hash_before,hash_after))
cat("Standalone script output:\n"); print(res,row.names=FALSE,digits=10)
cat("Input MD5 preserved:",hash_after,"\n")
