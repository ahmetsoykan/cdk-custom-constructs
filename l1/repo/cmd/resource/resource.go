package resource

import (
	"context"

	"github.com/aws-cloudformation/cloudformation-cli-go-plugin/cfn/handler"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

func makeGithubClient(token string) *github.Client {
	tokenstatic := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: token},
	)
	tc := oauth2.NewClient(context.TODO(), tokenstatic)

	return github.NewClient(tc)
}

// Create handles the Create event from the Cloudformation service.
func Create(req handler.Request, prevModel *Model, currentModel *Model) (handler.ProgressEvent, error) {

	client := makeGithubClient(*currentModel.Oauthtoken)

	repo, _, err := client.Repositories.Create(context.TODO(), "", &github.Repository{
		Name: currentModel.Name,
		Owner: &github.User{
			Name: currentModel.Owner,
		},
		Description: currentModel.Description,
	})
	if err != nil {
		return handler.ProgressEvent{}, err
	}
	currentModel.URL = aws.String(repo.GetURL())

	return handler.ProgressEvent{
		OperationStatus: handler.Success,
		ResourceModel:   currentModel,
	}, nil
}

// Read handles the Read event from the Cloudformation service.
func Read(req handler.Request, prevModel *Model, currentModel *Model) (handler.ProgressEvent, error) {
	client := makeGithubClient(*currentModel.Oauthtoken)

	repo, _, err := client.Repositories.Get(context.TODO(), *currentModel.Owner, *currentModel.Name)
	if err != nil {
		return handler.ProgressEvent{}, err
	}
	currentModel.URL = aws.String(repo.GetURL())

	return handler.ProgressEvent{
		OperationStatus: handler.Success,
		ResourceModel:   currentModel,
	}, nil
}

// Update handles the Update event from the Cloudformation service.
func Update(req handler.Request, prevModel *Model, currentModel *Model) (handler.ProgressEvent, error) {
	client := makeGithubClient(*currentModel.Oauthtoken)

	repo, _, err := client.Repositories.Edit(context.TODO(), *currentModel.Owner, *currentModel.Name, &github.Repository{
		Name: currentModel.Name,
		Owner: &github.User{
			Name: currentModel.Owner,
		},
		Description: currentModel.Description,
	})
	if err != nil {
		return handler.ProgressEvent{}, err
	}
	currentModel.URL = aws.String(repo.GetURL())

	return handler.ProgressEvent{
		OperationStatus: handler.Success,
		ResourceModel:   currentModel,
	}, nil
}

// Delete handles the Delete event from the Cloudformation service.
func Delete(req handler.Request, prevModel *Model, currentModel *Model) (handler.ProgressEvent, error) {
	client := makeGithubClient(*currentModel.Oauthtoken)

	_, err := client.Repositories.Delete(context.TODO(), *currentModel.Owner, *currentModel.Name)
	if err != nil {
		return handler.ProgressEvent{}, err
	}

	return handler.ProgressEvent{
		OperationStatus: handler.Success,
		ResourceModel:   currentModel,
	}, nil
}

// List handles the List event from the Cloudformation service.
func List(req handler.Request, prevModel *Model, currentModel *Model) (handler.ProgressEvent, error) {
	client := makeGithubClient(*currentModel.Oauthtoken)

	opt := github.RepositoryListOptions{}
	_, _, err := client.Repositories.List(context.TODO(), *currentModel.Owner, &opt)
	if err != nil {
		return handler.ProgressEvent{}, err
	}

	return handler.ProgressEvent{
		OperationStatus: handler.Success,
		ResourceModel:   currentModel,
	}, nil
}
