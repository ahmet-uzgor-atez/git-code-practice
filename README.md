Git uygulama eğitimi
Git uygulama eğitimi


git reset --soft HEAD~1 => yapılan değişiklikleri geri alıp değişiklikleri silmeden tutar;
git reset --hard HEAD~1 => yapılan değişiklikleri geri alıp değişiklikleri tamamen siler;


main =>                                                                                 PR-develop-main
        develop =>
                   commit-develop                                       PR-feature_branch
        feature_branch =>  git rebase origin/develop commit-feature_branch

